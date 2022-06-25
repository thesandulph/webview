# Bridge Native
NameSpace description is here...

<br>

## API

### verifyPin(payload: [PichakVerifyPinPayloadType](#pichakverifypinpayloadtype), callback: [SubscribeCallbackType](./event#subscribecallbacktype)): void
Method description is here...
   ~~~
   const payload = {
      // assigne payload properties
   };
   
   const callback = (event) => {
      console.log('pichak.verifyPin', event);
   };
   
   bridge.pichak.verifyPin(payload, callback);
   ~~~
[To do: Add event type](./todo.md#sync-types-with-platforms)

<br>

### encrypt(payload: [PichakEncryptPayloadType](#pichakencryptpayloadtype)): Promise\<[PichakEncryptResponseType](#pichakencryptresponsetype)\>
Method description is here...
   ~~~
   const payload = {
      // assigne payload properties
   };
   
   bridge.pichak.encrypt(payload)
      .then((response) => console.log('Resolve encrypt', response))
      .catch((error) => console.log('Reject encrypt', reject));
   ~~~

<br>

### decrypt(payload: [PichakDecryptPayloadType](#pichakdecryptpayloadtype)): Promise\<[PichakDecryptResponseType](#pichakdecryptresponsetype)\>
Method description is here...
   ~~~
   const payload = {
      // assigne payload properties
   };
   
   bridge.pichak.decrypt(payload)
      .then((response) => console.log('Resolve decrypt', response))
      .catch((error) => console.log('Reject decrypt', reject));
   ~~~

<br>

### encryptBulk(payload: [PichakEncryptPayloadType](#pichakencryptpayloadtype)[]): Promise\<[PichakEncryptResponseType](#pichakencryptresponsetype)[]\>
Method description is here...
   ~~~
   const payload = {
      // assigne payload properties
   };
   
   bridge.pichak.encryptBulk(payload)
      .then((response) => console.log('Resolve encryptBulk', response))
      .catch((error) => console.log('Reject encryptBulk', reject));
   ~~~

<br>

### decryptBulk(payload: [PichakDecryptPayloadType](#pichakdecryptpayloadtype)[]): Promise\<[PichakDecryptResponseType](#pichakdecryptresponsetype)[]\>
Method description is here...
   ~~~
   const payload = {
      // assigne payload properties
   };
   
   bridge.pichak.decryptBulk(payload)
      .then((response) => console.log('Resolve decryptBulk', response))
      .catch((error) => console.log('Reject decryptBulk', reject));
   ~~~

<br>

## Type

### PichakEncryptStatusEnum
~~~
enum PichakEncryptStatusEnum {
   SUCCESS = 0,
   UNKNOWN_ERROR = 101,
   PUBLIC_KEY_NOT_EXIST_ERROR = 102,
}
~~~
[To do: Complete enum type](./todo.md#sync-types-with-platforms)

<br>

### PichakSafePacketType
~~~
type PichakSafePacketType = {
   encryptedKey: string;
   encryptedData: string;
   iv: string;
};
~~~

<br>

### PichakVerifyPinPayloadType
~~~
type PichakVerifyPinPayloadType = any;
~~~
[To do: Add type](./todo.md#sync-types-with-platforms)

<br>

### PichakEncryptPayloadType
~~~
type PichakEncryptPayloadType = {
   trackId: string;
   data: string;
};
~~~

<br>

### PichakDecryptPayloadType
~~~
type PichakDecryptPayloadType = {
   trackId: string;
   encryptedData: string;
   iv: string;
};
~~~

<br>

### PichakEncryptResponseType
~~~
type PichakEncryptResponseType = {
   trackId: string;
   safePacket: PichakSafePacketType;
   statusCode: PichakEncryptStatusEnum;
};
~~~

<br>

### PichakDecryptResponseType
~~~
type PichakDecryptResponseType = {
   trackId: string;
   decryptedData: string;
   statusCode: PichakEncryptStatusEnum;
};
~~~
