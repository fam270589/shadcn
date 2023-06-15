import { Button } from '@/components/ui/button';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24 gap-5'>
			<div className='bg-custom text-blue-100 w-32 p-2 flex flex-col items-center gap-3 rounded-sm'>
				<p>Resource</p>
				<p>Resource</p>
				<p>Resource</p>
				<p>Resource</p>
			</div>
			<div className='bg-slate-100 flex flex-col items-center gap-3 p-5 rounded-sm'>
				<h1>shadcn test</h1>
				<Button>Default</Button>
				<Button variant='primary'>Primary</Button>
				<Button variant='primary' size='small'>
					Primary
				</Button>
				<Button variant='outline'>Outline</Button>
				<Button variant='destructive'>Destructive</Button>
				<Button variant='secondary'>Secondary</Button>
				<Button variant='ghost'>Ghost</Button>
				<Button>Default</Button>
				<Button size='sm'>Small</Button>
				<Button size='lg'>Large</Button>
				<Button size='small'>Small</Button>
				<Button size='large'>Large</Button>
			</div>
		</main>
	);
}
