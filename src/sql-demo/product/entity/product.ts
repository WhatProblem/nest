import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from "typeorm";

// 实体注解
// https://blog.csdn.net/cnwyt/article/details/85099841?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1.control

// typeorm-model-generator将数据库生成数据模型
// https://blog.csdn.net/kuangshp128/article/details/98062662
@Entity('product')
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    uuid: string

    @Column('varchar', {length: 32, name: 'product_name'})
    productName: string

    @Column('varchar', {length: 32, name: 'product_code'})
    productCode: string

    @Column('decimal', {name: 'product_price'})
    productPrice: number

    @Column({default: 1})
    status: number

    @Column('timestamp',{default: Timestamp, name: 'modified_time'})
    modifiedTime: Date

    @Column('datetime', {name: 'created_time'})
    createdTime: Date
}