class Car
  constructor: (@year, @make, @model, @owner) ->
    @odom = 0
    @mpg = 15
    @tank = 22
    @FULLTANK = 22

  getYear: ->
    @year

  getMake: ->
    @make

  getModel: ->
    @model

  getOwner: ->
    @owner

  setOwner: (newOwner) ->
    @owner = newOwner

  getOdom: ->
    @odom

  setOdom: (newOdom) ->
    @odom = newOdom

  getMPG: ->
    @mpg

  setMPG: (newMPG) ->
    @mpg = newMPG

  getFuel: ->
    (@tank / @FULLTANK) * 100

  setFullTank: (newTank) ->
    @FULLTANK = newTank
    @tank = newTank

  drive: (miles) ->
    @tank -= miles // @mpg
    @odom += miles

  fillUp: ->
    total = @FULLTANK - @tank
    @tank = @FULLTANK
    total


module.exports = Car;
