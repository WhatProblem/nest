import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    uuid: string

    @Column('varchar', {length: 32})
    product_name: string

    @Column('varchar', {length: 32})
    product_code: string

    @Column('decimal')
    product_price: number

    @Column({default: 1})
    status: number

    @Column('timestamp',{default: Timestamp})
    modified_time: Date

    @Column('datetime')
    created_time: Date
}