import { GraphQLDefinitionsFactory } from "@nestjs/graphql";
import { join } from "path";


const definitionsFactory = new GraphQLDefinitionsFactory()
definitionsFactory.generate({
    // 定义需要转译输出的graphql文件的目录位置
    typePaths: ['./**/*.graphql'],
    // 定义转译输出的graphql文件的目录位置
    path: join(process.cwd(), 'src/graphql-schema-demo/graphql-schema/graphql.schema.ts'),
    // 输出为 class 类的形式 -- 默认为 interface 接口形式
    outputAs: 'class',
    // 开启实时监听
    watch: true
})