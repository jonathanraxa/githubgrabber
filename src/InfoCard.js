import React, { useState, useEffect } from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

export const InfoCard = ({
    avatar,
    name,
    userName,
    userBio,
    repos,
    following,
    followers,

}) => {
    return (
        <div className="gh_card">
            <Card>
                <Image src={avatar} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{name}</Card.Header>
                    <Card.Meta>
                        <span>{userName}</span>
                    </Card.Meta>
                    <Card.Description>
                        {userBio}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        {repos} Repos
              </a>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        {following} Following
              </a>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        {followers} Followers
              </a>
                </Card.Content>
            </Card>
        </div>
    )
}