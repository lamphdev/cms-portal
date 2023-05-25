// import { Link, Typography } from '@mui/material';
// import Breadcrumbs from '@mui/material/Breadcrumbs';
// import { useEffect, useMemo, useState } from 'react';

// const _defaultGetTextGenerator = (param: any, paramValue: any, query: any) => null as any;
// const _defaultGetDefaultTextGenerator = (path: string, href?: string) => path;

// // Pulled out the path part breakdown because its
// // going to be used by both `asPath` and `pathname`
// const generatePathParts = (pathStr: string) => {
//     const pathWithoutQuery = pathStr.split("?")[0];
//     return pathWithoutQuery.split("/")
//         .filter(v => v.length > 0);
// }

// export default function CmsBreadcrumbs({ getDefaultTextGenerator = _defaultGetDefaultTextGenerator,
//     getTextGenerator = _defaultGetTextGenerator
// }) {
//     const pathname = window.location.pathname;
//     // const queryParams = new URLSearchParams(window.location.search)
//     const queryParams = {}

//     // Call the function to generate the breadcrumbs list
//     const breadcrumbs = useMemo(function generateBreadcrumbs() {
//         const asPathNestedRoutes = generatePathParts(pathname);
//         const pathnameNestedRoutes = generatePathParts(pathname);

//         // Iterate over the list of nested route parts and build
//         // a "crumb" object for each one.
//         const crumblist = asPathNestedRoutes.map((subpath, idx) => {
//             // Pull out and convert "[post_id]" into "post_id"
//             const param: string = pathnameNestedRoutes[idx].replace("[", "").replace("]", "");
//             // We can get the partial nested route for the crumb
//             // by joining together the path parts up to this point.
//             const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
//             const paramValue = window.location.pathname.split("/").filter(el => el.length > 0)[idx];
//             return {
//                 href,
//                 textGenerator: getTextGenerator(param, paramValue, queryParams),
//                 text: getDefaultTextGenerator(subpath, href)
//             };
//         })

//         // Add in a default "Home" crumb for the top-level
//         return [{ href: "/", text: "Home" }, ...crumblist];
//     }, [pathname, pathname, queryParams, getDefaultTextGenerator, getTextGenerator]);

//     return < Breadcrumbs arial-label="breadcrumb" >
//         {
//             breadcrumbs.map((crumb, idx) => (
//                 <Crumb {...crumb} key={idx} last={idx === breadcrumbs.length - 1} />
//             ))
//         }
//     </Breadcrumbs >
// }

// // Each individual "crumb" in the breadcrumbs list
// function Crumb({ text: defaultText, textGenerator, href, last = false }: any) {
//     const [text, setText] = useState(defaultText);
//     useEffect(() => {
//         (async function() {
//             // If `textGenerator` is nonexistent, then don't do anything
//             if (!Boolean(textGenerator)) { return; }
//             // Run the text generator and set the text again
//             const finalText = await textGenerator();
//             setText(finalText);
//         })();
//     }, [textGenerator]);
//     // The last crumb is rendered as normal text since we are already on the page
//     if (last) {
//         return <Typography color="text.primary"></Typography>
//     }

//     // All other crumbs will be rendered as links that can be visited 
//     return (
//         <Link underline="hover" color="inherit" href={href}>
//             {text}
//         </Link>
//     );
// }

export default function () {
    return (<div></div>)
}