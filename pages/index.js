import Head from 'next/head';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
	{
		id: 'm1',
		title: 'A First Meetup',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Thuringia_Eisenach_asv2020-07_img23_Wartburg_Castle.jpg/640px-Thuringia_Eisenach_asv2020-07_img23_Wartburg_Castle.jpg',
		address: 'House: 274, city: Dhaka,',
		description: 'This is a first meetup',
	},
	{
		id: 'm2',
		title: 'A Second Meetup',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Thuringia_Eisenach_asv2020-07_img23_Wartburg_Castle.jpg/640px-Thuringia_Eisenach_asv2020-07_img23_Wartburg_Castle.jpg',
		address: 'House: 274, city: Dhaka,',
		description: 'This is a Second meetup',
	},
];
function HomePage({ meetups }) {
	return (
		<>
			<Head>
				<title>Next Meetup</title>
				<meta
					name='description'
					content='Browser a huge list of highly active Next meetup!'
				/>
			</Head>
			<MeetupList meetups={meetups} />
		</>
	);
}
export const getStaticProps = async () => {
	// fetch data from apt
	const client = await MongoClient.connect(
		'mongodb+srv://nextjsdb:nextjsdb@cluster0.heiyh.mongodb.net/meetups?retryWrites=true&w=majority'
	);
	const db = client.db();
	const meetupCollection = db.collection('meetups');

	const meetups = await meetupCollection.find().toArray();

	client.close();

	return {
		props: {
			meetups: meetups.map((meetup) => ({
				title: meetup.title,
				address: meetup.address,
				image: meetup.image,
				id: meetup._id.toString(),
			})),
		},
		revalidate: 10,
	};
};
export default HomePage;
