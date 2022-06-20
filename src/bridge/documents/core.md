
# Bridge Core
NameSpace description is here...

<br>

## API

### setup(platform: [PlatformType](#platformtype)): void
Method description is here...
   ~~~
   bridge.core.setup('android');
   ~~~

<br>

### callAction(name: string, payload?: any): void
Method description is here...
   ~~~
   const payload = {
      foo: 'bar',
   };
   
   bridge.core.triggerEvent('eventName', payload);
   ~~~

<br>

### triggerEvent(name: string, payload?: any): void
Method description is here...
   ~~~
   const payload = {
      foo: 'bar',
   };
   
   bridge.core.triggerEvent('eventName', payload);
   ~~~

<br>

### subscribeEvent(name: string, callback: [EventCallbackType](#eventcallbacktype)): [UnsubscribeType](#unsubscribetype)
Method description is here...
   ~~~
   const callback = (event) => {
      console.log('Event listener', event);
   };
   
   const unsubscribe = bridge.core.subscribeEvent('eventName', callback);
   
   // do stuff ...
   
   unsubscribe(); // remove event listener
   ~~~

<br>

## Type

### PlatformType
~~~
type PlatformType = 'android' | 'ios' | 'pwa' ;
~~~

<br>

### EventCallbackType
~~~
type EventCallbackType = (event?: any) => void
~~~

<br>

### UnsubscribeType
~~~
type UnsubscribeType = () => void;
~~~
