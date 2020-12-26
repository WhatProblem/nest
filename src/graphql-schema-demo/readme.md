### apollo server 调用方法
```graphql
    query {
        # hello
        cat(id: 2) {
            id
            name
            age
        }
        # getCats{
        #   id
        #   name
        #   age
        # }
    }
    # mutation {
    #   createCat(createCatInput: {name: "测试789", age: 26}){
    #     name
    #     age
    #   }
    # }
```