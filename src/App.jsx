import { useState } from 'react';
import data from './data';
import { nanoid } from 'nanoid';

const App = () => {
	const [count, setCount] = useState(1);
	const [text, setText] = useState([]);
	const handleSumbit = (e) => {
		console.log(e);
		e.preventDefault();
		let amount = parseInt(count);
		setText(data.slice(0, amount));
	};
	return (
		<section className="section-center">
			<h4>Tired of boring lorem ipsum?</h4>
			<form
				className="lorem-form"
				onSubmit={handleSumbit}
			>
				<label htmlFor="amount">paragraphs:</label>
				<input
					type="number"
					name="amount"
					id="amount"
					min="1"
					step="1"
					max="8"
					value={count}
					onChange={(e) => {
						setCount(e.target.value);
					}}
				></input>
				<button
					className="btn"
					type="submit"
				>
					genrate
				</button>
			</form>
			<article className="lorem-text">
				{text.map((item) => {
					return <p key={nanoid()}>{item}</p>;
				})}
			</article>
		</section>
	);
};
export default App;
