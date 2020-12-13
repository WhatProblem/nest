import { Connection, EntitySubscriberInterface, EventSubscriber, InsertEvent, LoadEvent } from "typeorm";
import { Product } from "./entity/product";

/**
 * 事件监听订阅
 * @AfterLoad
 * @BeforeInsert
 * @AfterInsert
 * @BeforeUpdate
 * @AfterUpdate
 * @BeforeRemove
 * @AfterRemove
 */


@EventSubscriber()
export class ProductSubscribe implements EntitySubscriberInterface<Product> {
	constructor(connection: Connection) {
		connection.subscribers.push(this)
	}

	listenTo() {
		return Product
	}

	// 2、其次
	afterLoad(entity: Product ,event: LoadEvent<Product>):void {
		console.log('实体加载完成：', entity, event.entity)
		// { id: 11, status: 1 } { id: 11, status: 1 }
	}

	// 1、首先执行
	beforeInsert(event: InsertEvent<Product>) {
		console.log('数据新增之前：', event.entity)
		/* 
			{
				created_time: 2020-12-13T09:22:44.521Z,
				uuid: 'uuid-1607851364521',
				product_code: '1607851364534',
				product_name: '新鲜龙眼',
				product_price: 7.2 
			}
		*/
	}

	// 3、然后
	afterInsert(event: InsertEvent<Product>) {
		console.log('数据新增之后：', event.entity)
		/* 
			{
				created_time: 2020-12-13T09:22:44.521Z,
				uuid: 'uuid-1607851364521',
				product_code: '1607851364534',
				product_name: '新鲜龙眼',
				product_price: 7.2,
				id: 11,
				status: 1 
			}
		*/
	}
}