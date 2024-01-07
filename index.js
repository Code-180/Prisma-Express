const express = require('express');
const bodyParser = require('body-parser');
const {
  PrismaClient
} = require("@prisma/client");
//++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++
const app = express();
const prisma = new PrismaClient();
//++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++
app.use(bodyParser.json());
//++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++
// Define your routes and handle database operations using Prisma
//++++++++++++++++++++++++++++++++++++++++++
//Blog Section 
//++++++++++++++++++++++++++++++++++++++++++
//Blog ALL
//++++++++++++++++++++++++++++++++++++++++++
app.get('/blog-all', async (req, res) => {
  const listOBJ = await prisma.blog.findMany();
  res.json(listOBJ);
});
//++++++++++++++++++++++++++++++++++++++++++
//Blog Single
//++++++++++++++++++++++++++++++++++++++++++
app.get('/blog-single', async (req, res) => {
  const listOBJ = await prisma.blog.findUnique({
    where: {
      id: 1,
    },
  })
  res.json(listOBJ);
});
//++++++++++++++++++++++++++++++++++++++++++
//Blog Single With Selected Fields
//++++++++++++++++++++++++++++++++++++++++++
app.get('/blog-single-specific-filed', async (req, res) => {
  const listOBJ = await prisma.blog.findUnique({
    where: {
      id: 1,
    },
    select: {
      blog_title: true,
      blog_description: true,
    },
  })
  res.json(listOBJ);
});
//++++++++++++++++++++++++++++++++++++++++++
//Blog Select All With There User Details 
//++++++++++++++++++++++++++++++++++++++++++
app.get('/blog-join-user', async (req, res) => {
  const listOBJ = await prisma.blog.findMany({
    where: {
      user_id: 1,
    },
    include: {
      author: true,
    },
  })
  res.json(listOBJ);
});
//++++++++++++++++++++++++++++++++++++++++++
//Blog Select All With There User Details With Selected Fields
//++++++++++++++++++++++++++++++++++++++++++
app.get('/blog-join-user-selected', async (req, res) => {
  const listOBJ = await prisma.blog.findMany({
    where: {
      user_id: 1,
    },
    include: {
      author: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  })
  res.json(listOBJ);
});
//++++++++++++++++++++++++++++++++++++++++++
//Create Blog
//++++++++++++++++++++++++++++++++++++++++++
app.post('/blog-create', async (req, res) => {
  const blogObj = await prisma.blog.create({
    data: {
      user_id: 1,
      blog_title: 'Test-0',
      blog_description: 'Test-0',
      blog_tag: 'Test-0,Test-0',
      created_at: new Date(),
    },
  })
  res.json(blogObj);
});
//++++++++++++++++++++++++++++++++++++++++++
//Create Blog Many
//++++++++++++++++++++++++++++++++++++++++++
app.post('/blog-create-bulk', async (req, res) => {
  const createMany = await prisma.blog.createMany({
    data: [{
      user_id: 1,
      blog_title: 'Test',
      blog_description: 'Test-1',
      blog_tag: 'Test-1,Test-1',
      created_at: new Date(),
    }, {
      user_id: 1,
      blog_title: 'Test-2',
      blog_description: 'Test-2',
      blog_tag: 'Test-2,Test-2',
      created_at: new Date(),
    }, {
      user_id: 1,
      blog_title: 'Test-3',
      blog_description: 'Test-3',
      blog_tag: 'Test-3,Test-3',
      created_at: new Date(),
    }, {
      user_id: 1,
      blog_title: 'Test-4',
      blog_description: 'Test-4',
      blog_tag: 'Test-4,Test-4',
      created_at: new Date(),
    }],
    skipDuplicates: false,
  })
  res.json(createMany);
});
//++++++++++++++++++++++++++++++++++++++++++
//Update Blog
//++++++++++++++++++++++++++++++++++++++++++
app.post('/blog-update', async (req, res) => {
  const blogObj = await prisma.blog.update({
    where: {
      id: 10,
    },
    data: {
      user_id: 1,
      blog_title: 'Test-0',
      blog_description: 'Test-0',
      blog_tag: 'Test-0,Test-0',
      updated_at: new Date(),
    },
  })
  res.json(blogObj);
});
//++++++++++++++++++++++++++++++++++++++++++
//Update Blog Many
//++++++++++++++++++++++++++++++++++++++++++
app.post('/blog-update-many', async (req, res) => {
  const blogObj = await prisma.blog.updateMany({
    where: {
      blog_tag: {
        contains: 'Test-0',
      },
    },
    data: {
      user_id: 1,
      blog_title: 'Test-0',
      blog_description: 'Test-0',
      blog_tag: 'Test-0,Test-0',
      updated_at: new Date(),
    },
  })
  res.json(blogObj);
});
//++++++++++++++++++++++++++++++++++++++++++
//Delete Blog
//++++++++++++++++++++++++++++++++++++++++++
app.get('/blog-delete-single', async (req, res) => {
  const deleteBlog = await prisma.blog.delete({
    where: {
      id: +req.query.id,
    },
  })
  res.json(deleteBlog);
});
//++++++++++++++++++++++++++++++++++++++++++
//END Blog Section
//++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++
//Server
//++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++
const PORT = process.env.PORT || 3000;
//++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});