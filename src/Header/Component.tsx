import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { Header } from '@/payload-types'
import { MyHeader } from "@/Header/MyHeader";

export async function Header() {
  const headerData: Header = await getCachedGlobal('header', 1)()

  return (
    <>
      {/*<HeaderClient data={headerData} />*/}
      <MyHeader data={headerData} />
    </>
  )
}
