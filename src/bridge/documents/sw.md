
# Service Worker
NameSpace description is here...

<br>

## API

### config
Config description is here...
~~~
serviceWorkerRegistration.register(sw.config);
~~~

<br>

### subscribe(callback: [SwSubscribeCallbackType](#swsubscribecallbacktype)): [SwUnsubscribeCallbackType](#swunsubscribecallbacktype)
Method description is here...
~~~
// Other imports
import { sw, SwEventType } from 'bridge';
   
const App = () => {
  // App Logic
  const [registration, setRegistration] = useState();
  
  useEffect(() => {
  
     const unsubscribe = sw.subscribe((event: SwEventType) => {
        console.log('Sw Event:', event.type, event.registration);
        setRegistration(event.registration);
     });
     
     return () => {
        unsubscribe();
     };
     
  }, []);
  
  return {
     // App Tree Components
  };
}
~~~

<br>

### hasUpdate(registration: [SwRegistration](#swregistration)): boolean
Method description is here...
~~~
const updated = sw.hasUpdate(registration);
console.log(updated ? 'The new version of app is available.' : '');
~~~

<br>

### skipWaiting([SwRegistration](#swregistration), reload: boolean): boolean
Method description is here...
~~~
sw.skipWaiting(registration);
~~~

<br>

## Type

### SwType
~~~
type SwType = 'ready' | 'update' | 'success';
~~~

<br>

### SwRegistration
~~~
type SwRegistration = ServiceWorkerRegistration | null;
~~~

<br>

### SwEventType
~~~
type SwEventType = {
    type: SwType;
    registration: SwRegistration;
};
~~~

<br>

### SwSubscribeCallbackType
~~~
type SwSubscribeCallbackType = (event: SwEventType) => void;
~~~

<br>

### SwUnsubscribeCallbackType
~~~
type SwUnsubscribeCallbackType = () => void;
~~~
