import styled from "@emotion/styled"
import { Button, Modal } from "antd"
import { theme } from "../../theme"

export const ImageDetailBlock = styled('div')(() => ({
    fontSize: 14,
    '.header': {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: theme.colors.primary,
        color: '#ffffff',
        padding: '14px 13px 14px 12px',
        verticalAlign: 'middle',
        borderRadius: '5px 5px 0px 0px',
        '>span': {
            display: 'inherit',
            verticalAlign: 'middle',
            alignItems: 'center',
            fontWeight: 700,
        }
    },
    '.content': {
        padding: '33px 13px',
        boxshadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        '.content-primary': {
            paddingTop: 33,
            '.cards': {
                marginTop: 10,
                border: '1px dashed #c1c1c1',
                minHeight: '60vh',
                paddingLeft: 12,
                paddingRight: 12,
                paddingBottom: 12,
                display: 'flex',
                flexWrap: 'wrap',
                gap: 25,
                '.actions': {
                    marginTop: 10,
                    display: 'flex',
                    gap: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    flexWrap: 'wrap',
                },
                '.card': {
                    marginTop: 10,
                    boxSizing: 'border-box',
                    width: '242px',
                    background: '#FFFFFF',
                    border: '1px solid #868E96',
                    borderRadius: '8px',
                    padding: 3,
                    position: 'relative',
                    '.action': {
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        zIndex: 1
                    },
                    '.imagepreview': {
                        marginTop: 8.5,
                        textAlign: 'center',
                    },
                    '.title': {
                        marginTop: 10.5,
                        textAlign: 'center',
                    },
                    '.createDate': {
                        marginTop: 11,
                        textAlign: 'right',
                        fontSize: 12,
                    }
                }
            }
        }
    }
}))
export const ButtonEdit = styled(Button)(() => ({
    '&.ant-btn': {
        boxShadow: 'none',
        border: 'none',
        outline: 'none',
        backgroundColor: theme.colors.primary,
        ':hover': {
            backgroundColor: theme.colors.primary,
        }
    }
}))

export const ButtonActionImage = styled(Button)(({ color }: any) => ({
    '&.ant-btn': {
        boxShadow: 'none',
        border: 'none',
        outline: 'none',
        backgroundColor: 'transparent',
        width: 27,
        color: color ? color : theme.colors.primary,
        ':hover': {
        }
    }
}))

export const ButtonUpload = styled(Button)(() => ({
    '&.ant-btn': {
        boxShadow: 'none',
        border: 'none',
        outline: 'none',
        backgroundColor: theme.colors.primary,
        color: '#FFFFFF',
        ':hover': {
            backgroundColor: theme.colors.primary,
            color: '#FFFFFF'
        }
    }
}))

export const ModalEditImage = styled(Modal)(() => ({
    '&.ant-modal': {
        width: '1017px!important',
        '.danger': {
            color: 'red'
        },
        '.info-edit': {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            '>div': {
                marginTop: 18,
                width: '48%',
                display: 'flex',
                justifyContent: 'space-between',
                '.ant-select':{
                    width: '350px'
                },
                input: {
                    width: '350px'
                }
            }
        }
    },
}))