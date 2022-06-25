# Getting Started

1. Import **bridge** object from bridge module in top level component
   ~~~
   // Other imports
   import { bridge } from 'bridge';
   ~~~
   
2. Call **[setup](./core.md#setupplatform-platformtype-options-setupoptionstype-void)** with platform value method for initialize bridge module
   ~~~
   const App = () => {
      // App Logic
      
      useEffect(() => {
      
         bridge.core.setup('android');
         
      }, []);
      
      return {
         // App Tree Components
      };
   }
   ~~~
   
3. At this stage your application can control the bridge module

4. [OPTIONAL] for activate service worker, change below line in ***src/index.tsx***
   ~~~
   serviceWorkerRegistration.unregister();
   ~~~
   to
   ~~~
   serviceWorkerRegistration.register();
   ~~~
