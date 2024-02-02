const PostCard = () => {
  return (
    <div className="flex w-full min-h-[18rem] bg-white mb-[1rem] rounded-md shadow-md">
      <div className="flex flex-col w-[3.5rem] min-h-full bg-neutral-100 p-[1rem]">
        <div className="flex flex-col flex-1 items-center">
          <button
            type="button"
          >
            <img alt="up vote icon" src="/icons/up-vote.png" />
          </button>
          <div>1.1k</div>
          <button
            type="button"
          >
            <img alt="up vote icon" src="/icons/down-vote.png" />
          </button>
        </div>
        <div className="flex flex-col items-center">
          <button
            type="button"
          >
            <img alt="up vote icon" src="/icons/ion_chatbubbles-outline.png" />
          </button>
          <div className="mb-[0.5rem]">24</div>
          <button
            type="button"
          >
            <img alt="up vote icon" src="/icons/ion_arrow-redo-outline.png" />
          </button>
        </div>
      </div>
      <div className="p-[1rem] w-full">

        <div className="flex gap-[0.25rem] flex-auto">
          <img alt="post avatar" src="/icons/default-avatar.png" className="h-[1.25rem] w-[1.25rem]" />
          <p className="flex-auto">Kirby Borromeo</p>
          <div className="flex items-center">
            <img alt="clock icon" src="/icons/ion_time-outline.png" className="w-[0.625rem] h-[0.625rem]" />
            <p>6 hours ago</p>
          </div>
        </div>

        <p>@design-talks</p>

        <div>
          <div>
            First UI/UX Session in MG Bootcamp 2023
          </div>
          <div className="min-h-[12rem] w-full overflow-hidden rounded-md">
            <div
              className="min-h-[12rem] w-full overflow-hidden rounded-md bg-[red]"
              style={{ backgroundImage: 'url(/assets/post-sample-upload.png)', backgroundSize: 'cover' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;