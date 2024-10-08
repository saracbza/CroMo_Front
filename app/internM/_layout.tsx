import '@/global.css'
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'
import React from 'react'
import FooterMenu from '../../components/monitor/footerMenuM'
import Header from '../../components/header'

export default function Layout() {
    return (
            <GluestackUIProvider>
                <Header />
                <FooterMenu/>
            </GluestackUIProvider>   
    )
}
