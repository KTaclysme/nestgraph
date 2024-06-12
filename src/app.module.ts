import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { DatabaseModule } from './infrastructure/database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { DirectiveLocation, GraphQLDirective } from 'graphql';

@Module({
    imports: [
        TaskModule,
        UserModule,
        DatabaseModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            installSubscriptionHandlers: true,
            buildSchemaOptions: {
                directives: [
                    new GraphQLDirective({
                        name: 'upper',
                        locations: [DirectiveLocation.FIELD_DEFINITION],
                    }),
                ],
            },
        }),
    ],
    providers: [DatabaseModule],
    exports: [UserModule, TaskModule],
})
export class AppModule {}
