
# Bridge Core
NameSpace description is here...

<br>

## API

### setup(platform: [PlatformType](#platformtype), options: [SetupOptionsType](#setupoptionstype)): void
Method description is here...
   ~~~
   bridge.core.setup('android');
   ~~~

<br>

### dispatch(name: string, payload?: any): void
Method description is here...
   ~~~
   const payload = {
      foo: 'bar',
   };
   
   bridge.core.dispatch('eventName', payload);
   ~~~

<br>

### broadcast(name: string, payload?: any): void
Method description is here...
   ~~~
   const payload = {
      foo: 'bar',
   };
   
   bridge.core.broadcast('eventName', payload);
   ~~~

<br>

### subscribe(name: string, callback: [SubscribeCallbackType](./event.md#subscribecallbacktype)): [UnsubscribeCallbackType](./event.md#unsubscribecallbacktype)
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

### PlatformType
~~~
type PlatformType = 'android' | 'ios' | 'pwa';
~~~

<br>

### SetupOptionsType
~~~
type SetupOptionsType = {
    broadcast: BroadcastType,
    subscribe: SubscribeType,
};
~~~
