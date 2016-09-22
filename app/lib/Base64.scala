package library

object Base64 {

    def encodeString(in: Array[Byte]): String = java.util.Base64.getUrlEncoder.encodeToString(in)

    def decodeString(in: String): String = new String(java.util.Base64.getUrlDecoder.decode(in), "UTF-8")

}
