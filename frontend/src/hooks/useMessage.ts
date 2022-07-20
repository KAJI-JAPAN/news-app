import { useToast } from "@chakra-ui/react"
import { useCallback } from "react"

export const useMessage = () => {
  const toast = useToast()

  const showMessage = useCallback(() => {
    toast({
      title: '情報を取得できませんでした',
      status: 'error',
      position: "top",
      duration: 2000,
      isClosable: true
    })
  }, [toast])
return { showMessage }
}