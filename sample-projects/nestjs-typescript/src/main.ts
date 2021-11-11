/*import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';*/
import PriorityQueue from 'priority-queue-with-custom-comparator';

async function bootstrap() {
  /* I KNOW, I KNOW, THIS IS NOT HOW YOU USE NESTJS, BUT PURPOSE OF THIS SAMPLE
  PROJECT IS NOT TO SHOW YOU HOW TO USE NESTS, BUT TO SHOW YOU HOW TO USE THIS
  LIBRARY IN TYPESCRIPT PROJECT*/

  const q = new PriorityQueue<number>({
    comparator: (a, b) => {
      return a - b < 0;
    },
  });
  q.pushMany([-1, 4, 8, -9]);
  q.push(2);

  console.log('Queue size: ', q.size());
}
bootstrap();
