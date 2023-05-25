import ReactCrop, {
    centerCrop,
    makeAspectCrop,
    Crop,
    PixelCrop,
} from 'react-image-crop'
import { canvasPreview } from './canvasPreview'
import { useDebounceEffect } from './useDebounceEffect'

import 'react-image-crop/dist/ReactCrop.css'
import { useEffect, useRef, useState } from 'react'

// This is to demonstate how to make and center a % aspect crop
// which is a bit trickier so we use some helper functions.
function centerAspectCrop(
    mediaWidth: number,
    mediaHeight: number,
    aspect: number,
) {
    return centerCrop(
        makeAspectCrop(
            {
                unit: '%',
                width: 90,
            },
            aspect,
            mediaWidth,
            mediaHeight,
        ),
        mediaWidth,
        mediaHeight,
    )
}

interface Iprops {
    aspect: number
}

export const ImageCrop = (props: Iprops) => {
    const [imgSrc, setImgSrc] = useState('https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg')
    const previewCanvasRef = useRef<HTMLCanvasElement>(null)
    const imgRef = useRef<HTMLImageElement>(null)
    const hiddenAnchorRef = useRef<HTMLAnchorElement>(null)
    const blobUrlRef = useRef('')
    const [crop, setCrop] = useState<Crop>()
    const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
    const [scale, setScale] = useState(1)
    const [rotate, setRotate] = useState(0)
    const [aspect, setAspect] = useState<number | undefined>(props.aspect > 0 ? props.aspect : 16 / 9)

    useEffect(() => {
        if (props.aspect) {
            if (imgRef.current) {
                const { width, height } = imgRef.current
                setAspect(props.aspect)
                setCrop(centerAspectCrop(width, height, props.aspect))
                if (crop) {
                    const newCrop = centerAspectCrop(width, height, props.aspect);
                    setCompletedCrop({
                        x: newCrop.x * width / 100,
                        y: newCrop.y * height / 100,
                        width: newCrop.width * width / 100,
                        height: newCrop.height * height / 100,
                        unit: 'px'
                    })
                }
            }
        }
    }, [props.aspect])

    function blobToBase64(blob: any) {
        return new Promise((resolve, _) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.readAsDataURL(blob);
        });
    }

    function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files.length > 0) {
            setCrop(undefined) // Makes crop preview update between images.
            const reader = new FileReader()
            reader.addEventListener('load', () =>
                setImgSrc(reader.result?.toString() || ''),
            )
            reader.readAsDataURL(e.target.files[0])
        }
    }

    function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
        if (aspect) {
            const { width, height } = e.currentTarget
            setCrop(centerAspectCrop(width, height, aspect))
        }
    }

    function onDownloadCropClick() {
        if (!previewCanvasRef.current) {
            // throw new Error('Crop canvas does not exist')
            console.log('Crop canvas does not exist');
            return
        }

        previewCanvasRef.current.toBlob(async (blob) => {
            if (!blob) {
                // throw new Error('Failed to create blob');
                console.log('Failed to create blob');
                return
            }
            if (blobUrlRef.current) {
                URL.revokeObjectURL(blobUrlRef.current)
            }
            const base64: any = await blobToBase64(blob);
            navigator.clipboard.writeText(base64);
            console.log(base64);
            // blobUrlRef.current = URL.createObjectURL(blob);
            // hiddenAnchorRef.current!.href = blobUrlRef.current
            // hiddenAnchorRef.current!.click()
        })
    }

    useDebounceEffect(
        async () => {
            if (
                completedCrop?.width &&
                completedCrop?.height &&
                imgRef.current &&
                previewCanvasRef.current
            ) {
                // We use canvasPreview as it's much faster than imgPreview.
                canvasPreview(
                    imgRef.current,
                    previewCanvasRef.current,
                    completedCrop,
                    scale,
                    rotate,
                )
            }
        },
        100,
        [completedCrop, scale, rotate],
    )

    function handleToggleAspectClick() {
        if (aspect) {
            setAspect(undefined)
        } else if (imgRef.current) {
            const { width, height } = imgRef.current
            setAspect(16 / 9)
            setCrop(centerAspectCrop(width, height, 16 / 9))
        }
    }

    useEffect(() => {
        onDownloadCropClick();
    }, [setCompletedCrop, completedCrop])

    return <div>
        {!!imgSrc && (
            <ReactCrop
                crop={crop}
                onChange={(_, percentCrop) => setCrop(percentCrop)}
                onComplete={(c) => setCompletedCrop(c)}
                aspect={aspect}
            >
                <img
                    crossOrigin='anonymous'
                    ref={imgRef}
                    alt="Crop me"
                    src={imgSrc}
                    style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
                    onLoad={onImageLoad}
                />
            </ReactCrop>
        )}
        {!!completedCrop && (
            <>
                <div style={{ display: 'none' }}>
                    <canvas
                        ref={previewCanvasRef}
                        style={{
                            border: '1px solid black',
                            objectFit: 'contain',
                            width: completedCrop.width,
                            height: completedCrop.height,
                        }}
                    />
                </div>
                <div style={{ display: 'none' }}>
                    <button onClick={onDownloadCropClick}>Download Crop</button>
                    <a
                        ref={hiddenAnchorRef}
                        download
                        style={{
                            position: 'absolute',
                            top: '-200vh',
                            visibility: 'hidden',
                        }}
                    >
                        Hidden download
                    </a>
                </div>
            </>
        )}
    </div>
}