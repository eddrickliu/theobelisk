import { useRouter } from 'next/router'
/**
 * https://nextjs.org/docs/routing/dynamic-routes
 */
function About() {
    const router = useRouter()
    const { name } = router.query

    return <div>About {name}:</div>
}

export default About