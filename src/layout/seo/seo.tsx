import React from 'react'
import { seoPorops } from './seo.props'
import Head from 'next/head'
import { siteConfig } from '@/config/site.config'

const SEO = ({
    children,
    author = siteConfig.author,
    metaDescription = siteConfig.metaDescription,
    metaKeywords = siteConfig.metaKeywords,
    metaTitle = siteConfig.metaTitle }: seoPorops) => {
    return (
        <>
            <Head>
                <meta charSet='utf-8' />
                <meta name='wiewport' content='width=device-width, initial-scale=1, maximum-scale=5' />
                <title>{metaTitle}</title>
                <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
                <meta name='keyword' content={metaKeywords} />
                <meta name="author" content={author} />
                <meta name='description' content={metaDescription} />
                <link rel="shortcut icon" href={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/BYD_Company%2C_Ltd._-_Logo.svg/1200px-BYD_Company%2C_Ltd._-_Logo.svg.png"} type="image/x-icon" />
            </Head>
            {children}
        </>
    )
}

export default SEO