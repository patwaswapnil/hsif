<ion-view>
    <ion-nav-title>{{pollstaticContent.ctitle}}</ion-nav-title>
    <ion-nav-buttons side="right">
        <button class="button icon ion-refresh" ng-click="reloadresult()">
        </button>
    </ion-nav-buttons>
    <ion-content>
  <div ng-show="pollstatic">
    <div ng-bind-html="pollstaticContent"></div>

    <div class="Ncontent">
    <div class="row p0">
        <div class="col p0"> <h5>Rate this Session</h5></div>
        <div class="col p0"><ionic-ratings ratingsobj='ratingsObject' index='$index'></ionic-ratings></div>
    </div>
     <label class="item item-input">
    <textarea placeholder="Comments" rows="4"></textarea>
  </label>
<button class="button button-small button-assertive mt10"> &nbsp; Submit  &nbsp;</button>


<br/>
<br/>
<br/>
&nbsp;
       

    </div>
    




 </div>



        <div ng-hide="pollstatic">
            <div class="triviatexr">
                <div class="row">
                    <div class="col col-25"><span>Trivia -</span></div>
                    <div class="col" ng-controller="triviaLatestCtrl">
                        <marquee scrollamount="5">
                            <span ng-bind-html="triviItlatest"></span>
                        </marquee>
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="pageHead">
                <div class="row">
                    <div class="col col-100">
                        <h3 class="ptitle txtleft"><span>Opening Poll</span></h3></div>
                </div>
            </div>
            <h5 class="txtcenter fgreen" ng-if="result"> {{result}} </h5>
            <div class="Ncontent pollcont">
                <ion-list>
                    <div class="card ccard" ng-repeat="qt in polld">
                        <form name="test{{$parent.$index}}">
                            <div class="item item-divider">
                                {{ qt.title }}
                                <br/>
                                <span class="sessioname">{{qt.session_name}} </span>
                            </div>
                            <div class="item item-text-wrap" id="qnp_{{qt.id}}">
                                <span id="err_{{qt.id}}" class="errort"></span>
                                <div class="cradio plist" ng-repeat="opt in qt.options" ng-init="data" ng-if="opt.id!=''">
                                    <ion-radio name="test{{$parent.$index}}" ng-model="ans[qt.id]" ng-value="'{{opt.id}}'" ng-class="qt.participant=='invalid' ? 'test':''">{{opt.option}} </ion-radio>
                                    <div id="per_{{qt.id}}_{{opt.id}}">{{per}}</div>
                                    <div class="pollscore" ng-if="qt.participant=='invalid'">{{opt.per}}</div>
                                </div>
                                <div class="overlay" ng-if="qt.participant=='invalid'"> </div>
                            </div>
                            <button type="button" class="button button-outline button-positive bar" ng-click="pollsubmit(ans[qt.id], qt.id)" id="qn_{{qt.id}}" ng-if="qt.participant=='valid'">Submit </button>
                            <div ng-if="qt.participant=='invalid'">
                                <!-- Thank you. Your vote submitted successfully -->
                                <div class="successmsg" ng-click="reloadresult()">View Updated Results</div>
                            </div>
                            <!-- Thank you. Your vote submitted successfully -->
                            <div class="successmsg polbtn" id="psub_{{qt.id}}" ng-click="reloadresult()">View Updated Results</div>
                        </form>
                    </div>
                </ion-list>
            </div>
        </div>












    </ion-content>
    <div class="bar-footer" ng-show="pollstatic">
        <a href="#/app/queries">
            <div class="sendquery ion-help"></div>
        </a>
        <a href="javascript:void(0)" ng-click="checkuserlogin('chatlist');">
            <div class="chatbtn ion-chatbubble"></div>
        </a>
    </div>
</ion-view>
