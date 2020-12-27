import { Args, Parent, Query, ResolveProperty, Resolver } from "@nestjs/graphql";



@Resolver('Author')
export class AuthorRsolver {
	private readonly mockAuthor = [
		{ id: 1, firstName: 'ceshi', lastName: '1', post: [] },
		{ id: 2, firstName: 'ceshi', lastName: '2', post: [] },
		{ id: 3, firstName: 'ceshi', lastName: '3', post: [] },
	]
	private readonly mockPost = [
		{ id: 1, title: 'post1', votes: 1 },
		{ id: 2, title: 'post2', votes: 2 },
		{ id: 3, title: 'post3', votes: 3 },
	]

	@Query()
	async author(@Args('id') id: number) {
		return this.mockAuthor.find(item => item.id === id)
	}

	// 方式一：
	// @ResolveProperty()
	// async posts(@Parent() author) {
	// 	console.log(author)
	// 	const {id} = author
	// 	return this.mockPost.filter(item=>item.id === id)
	// }

	// // 方式二：给单个函数添加
	// @Resolver('Author')
	// @ResolveProperty()
	// async posts(@Parent() author) {
	// 	const {id} = author
	// 	return this.mockPost.filter(item=>item.id===id)
	// }

	// 方式三：
	@ResolveProperty('posts')
	async getPosts(@Parent() author) {
		const {id} = author
		console.log(author)
		return this.mockPost.filter(item=>item.id===id)
	}
}