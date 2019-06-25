# all the Spielberg movies
{ director: { $eq: "Steven Spielberg" } }

# filter by director who is Spielberg based on a regexp as per https://docs.mongodb.com/manual/reference/operator/query/regex/
{ director: { $in: [ /Spielberg/i ] } }

# filter out Steven S.
{director: {$ne: "Steven Spielberg"}}

# this filters all the movies by year and rating; the year filtered will be greater or equal to 2000
{$and : [{year: {$gte:2000}},{rate: 8.5}]}

# this filters by a year range (greater or equal to 1970 and less that or equal 2000 and its rate being 7 or more)
{$and: [{ rate : { $gte: 7 } }, { year : { $gte: 1970 } }, { year : { $lte: 2000 } }]}

# find every document (movie) containing at least crime and drama in its genres
{genre: { $in: ["Crime", "Drama"] } }

# find every document (movie) containing both crime and drama in its genres at least (you can have more things than those)
{genre: { $all: ["Crime", "Drama", "Horror"] } }

# find those elements where the test array of objects has an object with its values greater than 70
{test: {$elemMatch: {a : { $gt: 70 }}}}
