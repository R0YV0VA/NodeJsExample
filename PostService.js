import Post from './Post.js'
import fileService from './FileService.js'
class PostService {
    async create(post, picture){
        const fileName = fileService.saveFile(picture)
        const createdPost = await Post.create({...post, picture: fileName})
        return createdPost
    }

    async getAll(){
        const allPosts = await Post.find()
        return allPosts
    }

    async getOne(id){
        if(!id){
            throw new Error('No id specified!')
        }
            const post = await Post.findById(id)
            return post
    }

    async update(body){
        if(!body._id){
            throw new Error('No id specified!')
        }
        const updatedPost = await Post.findByIdAndUpdate(body._id, body, {new: true})
        return updatedPost
    }

    async delete(id){
        if(!id){
            throw new Error('No id specified!')
        }
        const post = await Post.findByIdAndDelete(id)
        return post
    }

}

export default new PostService()