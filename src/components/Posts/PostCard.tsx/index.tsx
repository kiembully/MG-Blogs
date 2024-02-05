import Button from '../../button'

const PostCard = () => {
  return (
    <div className='flex w-full min-h-72 bg-white mb-4 rounded-md shadow-lg'>
      <div className='flex flex-col w-14 min-h-full bg-neutral-100 p-4'>
        <div className='flex flex-col flex-1 items-center'>
          <Button variant='ghost'>
            <img alt='up vote icon' src='/icons/arrow.svg' />
          </Button>
          <p>1.1k</p>
          <Button variant='ghost'>
            <img className='rotate-180' alt='up vote icon' src='/icons/arrow.svg' />
          </Button>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <Button variant='ghost'>
            <img alt='up vote icon' src='/icons/ion_chatbubbles-outline.svg' />
          </Button>
          <p className='mx-8'>24</p>
          <Button variant='ghost'>
            <img alt='up vote icon' src='/icons/share-icon.svg' />
          </Button>
          <Button variant='ghost'>
            <img alt='up vote icon' src='/icons/write-icon.svg' />
          </Button>
          <Button variant='ghost'>
            <img alt='up vote icon' src='/icons/delete-icon.svg' />
          </Button>
        </div>
      </div>
      <div className='w-full p-4'>
        <div className='mb-4'>
          <div className='flex gap-2 flex-auto items-center'>
            <img alt='post avatar' src='/icons/default-avatar.png' className='h-5 w-5' />
            <p className='font-medium flex-auto'>Kirby Borromeo</p>
            <div className='flex items-center gap-1 text-gray-500'>
              <img alt='clock icon' src='/icons/ion_time-outline.svg' className='w-4 h-4' />
              <p>6 hours ago</p>
            </div>
          </div>
          <p className='text-gray-500 text-sm'>@design-talks</p>
        </div>

        <div>
          <p className='font-medium text-lg mb-2'>First UI/UX Session in MG Bootcamp 2023</p>

          <div className='min-h-48 w-full overflow-hidden rounded-md'>
            <div
              className='min-h-48 w-full overflow-hidden rounded-md bg-[red]'
              style={{
                backgroundImage: 'url(/assets/post-sample-upload.png)',
                backgroundSize: 'cover'
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
