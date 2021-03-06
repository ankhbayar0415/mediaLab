// User API stuff
const express = require("express");
const router = express.Router();

const User = require("../../controllers/User");
const Post = require("../../controllers/Post");

const auth = require("../utilities/authMiddleware");

// get list of all users from /api/user
router.get("/", function (req, res) {
  User.get()
    .then(function (data, err) {
      if (err) {
        res.status(500).send(err);
      }
      res.json(data);
    })
    .catch(function (err) {
      res.status(500).send(err);
    });
});

// register new user ADMIN TOOL
router.post("/", auth.isAdmin, function (req, res) {
  User.save(req.body)
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.status(500).send(err);
    });
});

// get user by id
router.get("/:id", function (req, res) {
  Promise.all([
    User.getById(req.params.id),
    Post.getByUserId(req.user ? req.user.id : 0, req.params.id),
  ])
    .then((values) => {
      let out = values[0];
      out.posts = values[1];

      res.json(out);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// modify user account
router.put("/:id", auth.isLoggedIn, function (req, res) {
  if (req.user.id == req.params.id || req.user.admin) {
    if (!req.user.admin) {
      delete req.body.admin;
    }
    User.updateById(req.params.id, req.body)
      .then(function (result) {
        if (result.affectedRows) {
          // Found user and did something
          res.send(result.info);
        } else {
          res.status(404).send("Did not find user with id: " + req.params.id);
        }
      })
      .catch(function (err) {
        if (err.errno == 1062) {
          // Duplicate entry
          res
            .status(409)
            .send("There is already an user with that username or email.");
        }
        res.status(500).send(err);
      });
  } else {
    res.status(401).send("You are not allowed to edit this user.");
  }
});

// delete user by id
router.delete("/:id", auth.isLoggedIn, function (req, res) {
  if (req.user.id == req.params.id || req.user.admin) {
    User.deleteById(req.params.id)
      .then(function (result) {
        if (result.affectedRows) {
          // Found user and deleted it
          res.send(result.info);
        } else {
          res.status(404).send("Did not find user with id: " + req.params.id);
        }
      })
      .catch(function (err) {
        res.status(500).send(err);
      });
  } else {
    res.status(401).send("You are not allowed to delete this user.");
  }
});

// get followers using user_id
router.get("/:id/followers", function (req, res) {
  // TODO: fix this
  User.getFollowersById(req.params.id)
    .then((results, fields) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

// get following users using user_id
router.get("/:id/following", function (req, res) {
  // TODO: fix this
  User.getFollowingById(req.params.id)
    .then((results, fields) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

// follow user using their id
router.post("/:id/follow", auth.isLoggedIn, function (req, res) {
  User.follow(req.user.id, req.params.id)
    .then((results, fields) => {
      console.log(results, fields);
      res.json(results[0]);
    })
    .catch((err) => {
      if (err.errno == 1062) {
        // Already following user
        res.send("Following.");
      } else {
        res.status(500).send(err);
      }
    });
});

router.post("/:id/unfollow", auth.isLoggedIn, function (req, res) {
  User.unfollow(req.user.id, req.params.id)
    .then((results, fields) => {
      console.log(results, fields);
      res.json(results[0]);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
