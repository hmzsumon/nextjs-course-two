import Head from 'next/head';
import { useRouter } from 'next/router';
import NewMeetupFrom from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
	const router = useRouter();
	const addMeetupHandler = async (enterMeetupData) => {
		const response = await fetch('/api/new-meetup', {
			method: 'POST',
			body: JSON.stringify(enterMeetupData),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await response.json();

		console.log(data);
		router.push('/');
	};
	return (
		<>
			<Head>
				<title>Add a New Meetup</title>
			</Head>
			<NewMeetupFrom onAddMeetup={addMeetupHandler} />
		</>
	);
};

export default NewMeetupPage;
