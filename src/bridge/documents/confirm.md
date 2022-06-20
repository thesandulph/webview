# Bridge Confirm
NameSpace description is here...

<br>

## API

### display(payload: [ConfirmDisplayPayloadType](#confirmdisplaypayloadtype)): Promise\<any\>
Method description is here...
   ~~~
   const payload = {
      title: 'Confirm Title',
      message: 'Confirm description is here...',
      resolveButton: 'OK',
      rejectButton: 'Cancel',
   };
   
   bridge.confirm.display(payload)
      .then(() => console.log('Resolve button pressed!'))
      .catch(() => console.log('Reject button pressed!'))
   ~~~

<br>

## Type

### ConfirmDisplayPayloadType
~~~
type ConfirmDisplayPayloadType = {
    title: string;
    message: string;
    resolveButton: string;
    rejectButton: string;
};
~~~
