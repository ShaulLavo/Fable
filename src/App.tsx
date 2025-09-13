import { Main } from './Main'
import { Providers } from './context/Providers'

//TODO PERFORMANCE :
// TODO lazy load AI + move it to worker
// TODO get rid of highlight js
// TODO icons ? maybe lazy them 2?

export default function App() {
	return (
		<Providers>
			<Main />
		</Providers>
	)
}
