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
function HomePage() {
	return <MeetupList meetups={DUMMY_MEETUPS} />;
}
export default HomePage;
