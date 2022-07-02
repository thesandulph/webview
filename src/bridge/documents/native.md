# Bridge Native
NameSpace description is here...

<br>

## API


### deepLink(payload: [DeepLinkPayloadType](#deeplinkpayloadtype)): void
Method description is here...
   ~~~
   const payload = {
      // assigne payload properties
   };
   
   bridge.native.deepLink(payload);
   ~~~

<br>

### openUrl(url: string): void
Method description is here...
   ~~~
   const url = 'https://asanpardakht.com';
   
   bridge.native.openUrl(url);
   ~~~

<br>

### share(payload: [SharePayloadType](#sharepayloadtype)): void
Method description is here...
   ~~~
   const payload = {
      // assigne payload properties
   };

   bridge.native.share(payload);
   ~~~

<br>

### foreground(callback: [SubscribeCallbackType](./event#subscribecallbacktype)): void
Method description is here...
   ~~~
   const callback = (event) => {
      console.log('bridge.native.foreground()', event);
   };
   
   bridge.native.foreground(callback);
   ~~~
[To do: Add event type](./todo.md#sync-types-with-platforms)

<br>

### getData(callback: [SubscribeCallbackType](./event#subscribecallbacktype)): void
Method description is here...
   ~~~
   const callback = (event) => {
      console.log('bridge.native.getData()', event);
   };
   
   bridge.native.getData(callback);
   ~~~
[To do: Add event type](./todo.md#sync-types-with-platforms)

<br>

### setFrequentlyInput(payload: [FrequentlyInputType](#frequentlyinputtype), callback: [SubscribeCallbackType](./event#subscribecallbacktype)): void
Method description is here...
   ~~~
   const payload = {
      // assigne payload properties
   };
   
   const callback = (event) => {
      console.log('bridge.native.setFrequentlyInput()', event);
   };
   
   bridge.native.setFrequentlyInput(payload, callback);
   ~~~
[To do: Add event type](./todo.md#sync-types-with-platforms)

<br>

### setPageTitle(title: string): void
Method description is here...
   ~~~
   const tille = 'Payment Page';
   bridge.native.setPageTitle(title);
   ~~~

<br>

### back(): void
Method description is here...
   ~~~
   bridge.native.goBack();
   ~~~

<br>

### pressBack(): void
Method description is here...
   ~~~
   bridge.native.nativeBack();
   ~~~

<br>

### handleBack(callback: [SubscribeCallbackType](./event#subscribecallbacktype)): void
Method description is here...
   ~~~
   const callback = (event) => {
      console.log('bridge.native.subscribeToBack()', event);
   };
   
   bridge.native.subscribeToBack();
   ~~~
[To do: Add event type](./todo.md#sync-types-with-platforms)

<br>

### showPlusButton(callback: [SubscribeCallbackType](./event#subscribecallbacktype)): void
Method description is here...
   ~~~
   const callback = (event) => {
      console.log('bridge.native.showPlusButton()', event);
   };
   
   bridge.native.showPlusButton();
   ~~~
[To do: Add event type](./todo.md#sync-types-with-platforms)

<br>

### hidePlusButton(): void
Method description is here...
   ~~~
   bridge.native.hidePlusButton();
   ~~~

<br>

### showRefreshButton(callback: [SubscribeCallbackType](./event#subscribecallbacktype)): void
Method description is here...
   ~~~
   const callback = (event) => {
      console.log('bridge.native.showRefreshButton()', event);
   };
   
   bridge.native.showRefreshButton(callback);
   ~~~
[To do: Add event type](./todo.md#sync-types-with-platforms)

<br>

### hideRefreshButton(): void
Method description is here...
   ~~~
   bridge.native.hideRefreshButton();
   ~~~

<br>

## Type

### DeepLinkPayloadType
~~~
type DeepLinkPayloadType = any;
~~~
[To do: Add type](./todo.md#sync-types-with-platforms)

<br>

### SharePayloadType
~~~
type SharePayloadType = any;
~~~
[To do: Add type](./todo.md#sync-types-with-platforms)

<br>

### FrequentlyInputType
~~~
type FrequentlyInputType = any;
~~~
[To do: Add type](./todo.md#sync-types-with-platforms)
