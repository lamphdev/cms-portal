
import { Breadcrumb, Typography } from "antd";
import { useMemo } from "react";
import { RouterConfig } from "../../router-config";

const getTitle = (pathnameNestedRoutes: string[], idx: number, routerConfig: any[] = []): string => {
    if (idx === 0) {
        return routerConfig.find((el) => el.path.replace('/', '') === pathnameNestedRoutes[0]).name
    }
    const newPathNest = pathnameNestedRoutes.slice(1);
    return getTitle(newPathNest, idx - 1, routerConfig.find((el) => el.path.replace('/', '') === pathnameNestedRoutes[0]).children);
}

const getTextDefault = (subpath: string, pathnameNestedRoutes: string[], idx: number) => {
    switch (subpath) {
        case 'new': {
            return 'Tạo mới'
        }
        default: {
            try {
                return getTitle(pathnameNestedRoutes, idx, RouterConfig);
            } catch (error) {
                return subpath
            }
        }
    }
}


export function CmsBreakcrumb() {
    const pathname = window.location.pathname;
    const paths = pathname.split('/').filter(element => element.length > 0);

    const items = useMemo(function getItemBreadcrumb() {
        const list = paths.map((subpath, idx) => {
            const href = '/' + paths.slice(0, idx + 1).join('/');
            const pathnameNestedRoutes = paths.slice(0, idx + 1);
            return {
                href,
                path: href,
                title: getTextDefault(subpath, pathnameNestedRoutes, idx)
            }
        })
        return [{ href: '/', title: 'Trang chủ', path: '/' }, ...list];
    }, [])
    return <Breadcrumb
        separator=">"
        items={items}
    />
}