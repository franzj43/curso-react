import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard userName='midudev' initialIsFollowing>
                Miguel Angel Duran
            </TwitterFollowCard>
            <TwitterFollowCard userName='MuchFranz'>
                Franz Much
            </TwitterFollowCard>
        </section>
    )
}