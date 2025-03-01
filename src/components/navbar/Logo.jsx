import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import LogoImg from '../../images/Kenstate.png'

const Logo = (props) => {
  return (
    <Box {...props}>
        <Image src={LogoImg} />
    </Box>
  )
}

export default Logo