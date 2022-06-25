# Bridge Payment
NameSpace description is here...

<br>

## API

### start(payload: [PaymentStartPayloadType](#paymentstartpayloadtype), callback: [SubscribeCallbackType](./event#subscribecallbacktype)): void
Method description is here...
   ~~~
   const payload = {
      // assigne payload properties
   };
   
   const callback = (event) => {
      console.log('bridge.payment.start()', event);
   };
   
   bridge.payment.start(payload, callback);
   ~~~
[To do: Add event type](./todo.md#sync-types-with-platforms)

<br>

## Type

### PaymentStartPayloadType
~~~
type PaymentStartPayloadType = any;
~~~
[To do: Add type](./todo.md#sync-types-with-platforms)
