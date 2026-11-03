import type { Env as WorkerEnv } from '../src/index';

declare global {
  namespace Cloudflare {
    interface Env extends WorkerEnv {
      TEST_SCHEMA: string;
    }

    interface GlobalProps {
      mainModule: typeof import('../src/index');
      durableNamespaces: 'Room';
    }
  }
}
