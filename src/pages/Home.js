import classes from './Home.module.css';

const Home = () => {
    return <h1>Home</h1>
}

export default Home;

// const Home = () => {
// 	const triggerNext = (event) => {
// 		const iteration = event.target.className;
//         console.log(iteration);
// 		const ordinals = [
// 			'first',
// 			'second',
// 			'third',
// 			'fourth',
// 			'fifth',
// 			'sixth',
// 			'seventh',
// 			'eighth',
// 			'ninth',
// 			'tenth',
// 		];

// 		let nextTarget;
// 		for (let i = 0; i < ordinals.length; i++)
// 			if (iteration.includes(ordinals[i])) {
// 				nextTarget = ordinals[i + 1];
// 			}
// 		for (const el of document.getElementsByClassName(nextTarget)) {
// 			el.className = el.className.concat(' animate');
// 		}
// 	};

// 	return (
// 		<div className='Home'>
// 			<div className={classes.seventh}>
// 				<p className={[classes.first, classes.animate]} onAnimationEnd={triggerNext}>
// 					Eager Student
// 				</p>
// 				<p className={classes.second} onAnimationEnd={triggerNext}>
// 					Dedicated Teacher
// 				</p>
// 				<p className={classes.third} onAnimationEnd={triggerNext}>
// 					Loyal Friend
// 				</p>
// 				<p className={classes.fourth} onAnimationEnd={triggerNext}>
// 					Committed Partner
// 				</p>
// 				<p className={classes.fifth} onAnimationEnd={triggerNext}>
// 					Humble Servant
// 				</p>
// 			</div>
// 			<div className={classes.sixth} onAnimationEnd={triggerNext}>
// 				<h1>Kennon Silence</h1>
// 				<h2>Web Developer</h2>
// 			</div>
// 		</div>
// 	);
// };

// export default Home;