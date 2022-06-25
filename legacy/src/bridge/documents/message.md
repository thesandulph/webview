# Bridge Message
NameSpace description is here...

<br>

## API

### display(payload: [MessageDisplayPayloadType](#messagedisplaypayloadtype)): void
Method description is here...
   ~~~
   const payload = {
      type: 'general',
      title: 'Message Title',
      message: 'Message description is here...',
   };
   
   bridge.message.display(payload);
   ~~~

<br>

## Type

### MessageType
~~~
type MessageType = 'general' | 'info' | 'success' | 'error' | 'fatal';
~~~

<br>

### MessageDisplayPayloadType
~~~
type MessageDisplayPayloadType = {
   type: MessageType;
   title: string;
   message: string | string[];
};
~~~
