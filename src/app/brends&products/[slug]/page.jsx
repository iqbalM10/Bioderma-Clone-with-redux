

import { getData, getSingleData } from '@/app/lib/post'
import SingleProduct from '@/components/SIngleProduct/SingleProduct';







export const SinglePost = async ({ params: { slug } }) => {


    const post = await getSingleData(slug);
    console.log(post.count);
    return (
        <SingleProduct post={post} />
    )
}

export default SinglePost