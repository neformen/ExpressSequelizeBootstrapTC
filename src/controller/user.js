"use strict";

var model = require("../model");


exports.create = function (req, res) {
    var data = req.body;
    model.User.create({
        firstName: data.firstName,
        lastName: data.lastName,
        title: data.title,
        OrganizationId: data.organizationId
    }).then(function(user) {
        res.status(200).json(user);

    }).catch(function(error) {
        res.status(500).send(error);
    });
};
