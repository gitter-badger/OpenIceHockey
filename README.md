# README [![Build Status](https://travis-ci.org/iamphill/OpenIceHockey.svg?branch=master)](https://travis-ci.org/iamphill/OpenIceHockey)

[![Join the chat at https://gitter.im/iamphill/OpenIceHockey](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/iamphill/OpenIceHockey?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

With my love of Ice Hockey growing bigger by the day, it makes sense to make something that would track everything that happens.
Whilst a lot of products like this exist, the data they offer is either very closed off to themselves/the EIHA or they don't offer very good stats or live match data.

This is where this product is aiming at.

The data saved and stored is fully open to all teams to use. With a read-only API available, developers can make great products for team. Stats ranging from goals scored, team wins and number penalty minutes are all available through the API. Documentation will be available.

Whilst this is great, the data has to come from somewhere. This is where the teams themsevles come in. Instead of using the other products, the idea is to use this product instead to track everything.

## Running locally

First thing first! Install all gems

```
bundle install
```

Then run the following to make sure you get all the bower components etc.

```
rake bower:install
```

All templates are AngularJS templates. Rails is used as the backend only! No views are created with Angular at the moment. Possibly in the future some views will be done with Rails, however, AngularJS handles this pretty fine.
