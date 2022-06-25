
# Event
NameSpace description is here...

<br>

## API

### broadcast(name: string, payload?: any): void
Method description is here...
   ~~~
   const payload = {
      foo: 'bar',
   };
   
   bridge.core.broadcast('eventName', payload);
   ~~~

<br>

### subscribe(name: string, callback: [SubscribeCallbackType](#subscribecallbacktype)): [UnsubscribeCallbackType](#unsubscribecallbacktype)
Method description is here...
   ~~~
   const callback = (event) => {
      console.log('Event listener', event);
   };
   
   const unsubscribe = bridge.core.subscribe('eventName', callback);
   
   // do stuff ...
   
   unsubscribe(); // remove event listener
   ~~~

<br>

## Type

### SubscribeCallbackType
~~~
type SubscribeCallbackType = (event?: any) => void;
~~~

<br>

### UnsubscribeCallbackType
~~~
type UnsubscribeCallbackType = () => void;
~~~

<br>

### UnsubscribeCallbackRecordType
~~~
type UnsubscribeCallbackRecordType = () => void;
~~~

<br>

### BroadcastType
~~~
type BroadcastType = (name: string, payload?: any) => void;
~~~

<br>

### SubscribeType
~~~
type SubscribeType = (name: string, callback: SubscribeCallbackType) => UnsubscribeCallbackType;
~~~
