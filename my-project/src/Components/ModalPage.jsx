
import React from 'react'

import {
    Button,
     Modal,
     ModalOverlay,
     ModalHeader,
     FormControl,
     FormLabel,
     ModalFooter,
     ModalBody,
     ModalContent,
     ModalCloseButton,
     Input,

    } from '@chakra-ui/react'

export const ModalPage=({isOpen, onOpen, onClose, alerting, mail, setMail , password, setPassword})=>{

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    return (
        <>
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Login Here</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Email-id</FormLabel>
                  <Input ref={initialRef} placeholder='Email-id' type='email' onChange={(e) => setMail(e.target.value)}/>
                </FormControl>
    
                <FormControl mt={4}>
                  <FormLabel>Password</FormLabel>
                  <Input placeholder='Enter Your Password' type='password' onChange={(e) => setPassword(e.target.value)} />
                </FormControl>
              </ModalBody>
    
              <ModalFooter>
                <Button colorScheme='red' mr={3} onClick={alerting}>
                  Login
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
}