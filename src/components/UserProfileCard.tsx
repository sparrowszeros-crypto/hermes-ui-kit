import React from 'react';
import Avatar from './Avatar';
import StatusBadge from './StatusBadge';
import SkillTag from './SkillTag';
import SendMessageButton from './SendMessageButton';

interface UserProfileCardProps {
  user: UserProfile;
}

export default function UserProfileCard({ user }: UserProfileCardProps) {
  return (
    <div className='container p-16 max-w-7xl bg-white rounded-lg shadow-md'>
      <div className='user-profile-card'>
        <div className='avatar'>
          <Avatar src={user.avatarUrl} />
        </div>
        <div className='status-badge'>
          <StatusBadge status={user.status} />
        </div>
        <div className='skills-tags'>
          {user.skills.map((skill, index) => (
            <SkillTag key={index} skill={skill} />
          ))}
        </div>
        <div className='send-message-button'>
          <SendMessageButton onClick={() => console.log('Send message clicked')} />
        </div>
      </div>
    </div>
  );
}
