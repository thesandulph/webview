# Bridge OTP
NameSpace description is here...

<br>

## API

### fetch(payload: [OtpFetchPayloadType](#otpfetchpayloadtype), callback: [SubscribeCallbackType](./event#subscribecallbacktype)): void
Method description is here...
   ~~~
   const payload = {
      // assigne payload properties
   };
   
   const callback = (event) => {
      console.log('bridge.otp.fetch()', event);
   };
   
   bridge.otp.fetch(payload, callback);
   ~~~
[To do: Add event type](./todo.md#sync-types-with-platforms)

<br>

### register(payload: [OtpRegisterPayloadType](#otpregisterpayloadtype), callback: [SubscribeCallbackType](./event#subscribecallbacktype)): void
Method description is here...
   ~~~
   const payload = {
      // assigne payload properties
   };
   
   const callback = (event) => {
      console.log('bridge.otp.register()', event);
   };
   
   bridge.otp.register(payload, callback);
   ~~~
[To do: Add event type](./todo.md#sync-types-with-platforms)

<br>

### getStatus(payload: [OtpGetStatusPayloadType](#otpgetstatuspayloadtype), callback: [SubscribeCallbackType](./event#subscribecallbacktype)): void
Method description is here...
   ~~~
   const payload = {
      // assigne payload properties
   };
   
   const callback = (event) => {
      console.log('bridge.otp.getStatus()', event);
   };
   
   bridge.otp.getStatus(payload, callback);
   ~~~
[To do: Add event type](./todo.md#sync-types-with-platforms)

<br>

### getToken(callback: [SubscribeCallbackType](./event#subscribecallbacktype)): void
Method description is here...
   ~~~
   const callback = (token) => {
      console.log('bridge.otp.getToken()', event);
   };
   
   bridge.otp.getToken(payload, callback);
   ~~~
[To do: Add event type](./todo.md#sync-types-with-platforms)

<br>

## Type

### OtpFetchPayloadType
~~~
type OtpFetchPayloadType = any;
~~~
[To do: Add type](./todo.md#sync-types-with-platforms)

<br>

### OtpRegisterPayloadType
~~~
type OtpRegisterPayloadType = any;
~~~
[To do: Add type](./todo.md#sync-types-with-platforms)

<br>

### OtpGetStatusPayloadType
~~~
type OtpGetStatusPayloadType = any;
~~~
[To do: Add type](./todo.md#sync-types-with-platforms)
