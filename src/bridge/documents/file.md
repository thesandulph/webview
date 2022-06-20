# Bridge File
NameSpace description is here...

<br>

## API

### upload(payload: [FileUploadPayloadType](#fileuploadpayloadtype)): Promise\<any\>
Method description is here...
   ~~~
   const payload = {
      // assigne payload properties
   };
   
   bridge.file.upload(payload, callback)
      .then(() => console.log('File upload is done...'))
      .catch(() => console.log('Error in file uploading...'))
   ~~~

<br>

### uploadAudio(payload: [FileUploadAudioPayloadType](#fileuploadaudiopayloadtype)): Promise\<any\>
Method description is here...
   ~~~
   const payload = {
      // assigne payload properties
   };
   
   bridge.file.uploadAudio(payload)
      .then(() => console.log('Audio upload is done...'))
      .catch(() => console.log('Error in audio uploading...'))
   ~~~

<br>

### uploadImage(payload: [FileUploadImagePayloadType](#fileuploadimagepayloadtype)): Promise\<any\>
Method description is here...
   ~~~
   const payload = {
      // assigne payload properties
   };
   
   bridge.file.uploadImage(payload)
      .then(() => console.log('Image upload is done...'))
      .catch(() => console.log('Error in image uploading...'))
   ~~~

<br>

### uploadVideo(payload: [FileUploadVideoPayloadType](#fileuploadvideopayloadtype)): Promise\<any\>
Method description is here...
   ~~~
   const payload = {
      // assigne payload properties
   };
   
   bridge.file.uploadVideo(payload)
      .then(() => console.log('Video upload is done...'))
      .catch(() => console.log('Error in video uploading...'))
   ~~~

<br>

### uploadCompleted(payload: [FileUploadCompletedPayloadType](#fileuploadcompletedpayloadtype)): void
Method description is here...

<br>

## Type

### FileUploadPayloadType
~~~
type FileUploadPayloadType = {
   httpHeader: FileUploadHeaderObjectType;
   httpBody: FileUploadHeaderObjectType;
   url: string;
   title: string;
   description: string;
   fileSize: string | number;
   type: FileValueType;
   allowedExtensions: string;
   duration: string | number;
   maxWidth: string | number;
   maxHeight: string | number;
   minWidth: string | number;
   minHeight: string | number;
};
~~~

<br>

### FileUploadAudioPayloadType
~~~
type FileUploadAudioPayloadType = Omit<FileUploadPayloadType, 'type' | 'allowedExtensions' | 'maxWidth' | 'maxHeight' | 'minWidth' | 'minHeight'>;
~~~

<br>

### FileUploadImagePayloadType
~~~
type FileUploadImagePayloadType = Omit<FileUploadPayloadType, 'type' | 'allowedExtensions' | 'duration'>;
~~~

<br>

### FileUploadVideoPayloadType
~~~
type FileUploadVideoPayloadType = Omit<FileUploadPayloadType, 'type' | 'allowedExtensions'>;
~~~

<br>

### FileUploadCompletedPayloadType
~~~
type FileUploadCompletedPayloadType = {
   errorCode: string | number;
   errorMessage: string;
   serverResponse: any;
};
~~~
[To do: Add serverResponse type](./todo.md#sync-types-with-platforms)
